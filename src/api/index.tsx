import { db } from "../../firebase";

export const getCertificates = () => {
  return new Promise((resolve, reject) => {
    db.collection("certificates")
      .where("id_number", "==", "795849QTR")
      .get()
      .then((response: any) => {
        const docSnapshots = response.docs;
        let result = [];
        for (let snapShot of docSnapshots) {
          const doc = snapShot.data();
          result.push(doc);
        }
        resolve(result);
      })
      .catch((error: any) => {
        console.log(error);
        reject(error);
      });
  });
};
