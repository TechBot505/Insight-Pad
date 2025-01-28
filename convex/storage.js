import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const uploadFileToStorage = mutation({
    args: {
        fileId: v.string(),
        fileName: v.string(),
        storageId: v.string(),
        createdBy: v.string()
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.insert("files", {
            fileId: args.fileId,
            fileName: args.fileName,
            storageId: args.storageId,
            createdBy: args.createdBy
        });
        return { success: true, message: "File uploaded successfully" };
    }
})