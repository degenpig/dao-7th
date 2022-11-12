import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { nanoid } from "nanoid";
import * as ethSig from "eth-sig-util";
import * as ethUtil from "ethereumjs-util";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

export const getNonce = functions.https.onRequest(async (request, response) => {
  try {
    const { address } = request.query;
    if (!address) throw new Error(`No address in request.`);
    const auth = admin.auth();
    const db = admin.firestore();
    const user = await auth.getUserByEmail(`${address}@procamelriders.com`);
    const dbResponse = await db
      .collection("presales")
      .doc((address as string).toLowerCase())
      .get();
    // If this record is not in the database, the address is not in presale list.
    if (!dbResponse.exists) throw new Error(`Address not in presales.`);
    const { nonce } = dbResponse.data() as any;

    response.json({ user, address, nonce });
  } catch (error) {
    console.log((error as Error).message);
    response.status(403).send({ message: error.message });
  }
});

// Set custom claims on user.
export const onUserCreate = functions.auth
  .user()
  .onCreate(async (user, context) => {
    try {
      const db = admin.firestore();
      const { email, uid } = user;
      const address = email.split("@").shift();
      if (!address)
        throw new Error(
          `Failed to get address for user: ${email} with uid: ${uid}`
        );

      await db
        .collection("presales")
        // important to set address toLowecase for string comparison later.
        .doc(address.toLowerCase())
        .set({ nonce: nanoid() });

      console.log(nanoid());
    } catch (error) {
      console.log(error);
    }
  });

// Set custom claims on user.
export const onUserDelete = functions.auth
  .user()
  .onDelete(async (user, context) => {
    try {
      const db = admin.firestore();
      const { email, uid } = user;
      const address = email.split("@").shift();
      if (!address)
        throw new Error(
          `Failed to get address for deleting user: ${email} with uid: ${uid}`
        );

      await db
        .collection("presales")
        // important to set address toLowecase for string comparison later.
        .doc(address.toLowerCase())
        .delete();

      console.log(nanoid());
    } catch (error) {
      console.log(error);
    }
  });

export const verifyAddress = functions.https.onRequest(
  async (request, response) => {
    try {
      const { address, signature } = request.query;
      if (!address) throw new Error(`No address in request.`);
      if (!signature) throw new Error(`No signature in request.`);

      const db = admin.firestore();
      const dbResponse = await db
        .collection("presales")
        .doc((address as string).toLowerCase())
        .get();

      // If this record is not in the database, the address is not in presale list.
      if (!dbResponse.exists) throw new Error(`Address not in presales.`);
      const { nonce } = dbResponse.data() as any;
      if (!nonce) throw new Error(`Could not find nonce for ${address}`);
      const msg = `I am signing my one-time nonce: ${nonce}`;

      // If recovered address is in database and signed the message.
      const msgBufferHex = ethUtil.bufferToHex(Buffer.from(msg, "utf8"));
      const recoveredAddress = ethSig.recoverPersonalSignature({
        data: msgBufferHex,
        sig: signature as string,
      });

      if (recoveredAddress.toLowerCase() !== (address as string).toLowerCase())
        throw new Error(`Address signing the message not in presales.`);

      response.send({
        address: recoveredAddress,
      });
    } catch (error) {
      console.log((error as Error).message);
      response.status(403).send({
        message: error.message,
      });
    }
  }
);
