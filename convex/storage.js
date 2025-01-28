import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const uploadFileToStorage = mutation({
    args: {
        fileId: v.string(),
        fileName: v.string(),
        storageId: v.string(),
        fileUrl: v.string(),
        createdBy: v.string()
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.insert("files", {
            fileId: args.fileId,
            fileName: args.fileName,
            storageId: args.storageId,
            fileUrl: args.fileUrl,
            createdBy: args.createdBy
        });
        return { success: true, message: "File uploaded successfully" };
    }
})

export const getUploadedFileUrl = mutation({
    args: {
        storageId: v.string()
    },
    handler: async (ctx, args) => {
        const url = await ctx.storage.getUrl(args.storageId);
        return url;
    }
})

export const getFileRecord = query({
    args: {
        fileId: v.string()
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.query("files").filter((q) => q.eq(q.field("fileId"), args.fileId)).collect();
        return result[0];
    }
})