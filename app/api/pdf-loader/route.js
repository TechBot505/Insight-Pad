import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const pdfUrl = "https://beloved-loris-162.convex.cloud/api/storage/8eb923ec-d71c-4f0f-ba5e-8cf2fac834b9";

export async function GET(req) {
    
    // 1. Load the PDF file
    const response = await fetch(pdfUrl);
    const data = await response.blob();
    const pdfLoader = new WebPDFLoader(data);
    const docs = await pdfLoader.load();

    let pdfText = "";
    docs.forEach(doc => {
        pdfText += doc.pageContent;
    });

    // 2. Split the text into smaller chunks
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 100,
        chunkOverlap: 20
    });

    const output = await splitter.createDocuments([pdfText]);

    let splitterList = [];
    output.forEach(doc => {
        splitterList.push(doc.pageContent);
    });

    return NextResponse.json({result: splitterList});
}