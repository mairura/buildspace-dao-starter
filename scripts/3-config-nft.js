import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x7756964C8Aa033cCDFe8feD2DF712c2a509F7536");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Happy Smiles",
        description: "This NFT will give you access to ArticleDAO!",
        image: readFileSync("scripts/assets/th.webp"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();