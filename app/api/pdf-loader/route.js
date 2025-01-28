import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export async function GET(req) {

    const reqUrl = req.url;
    const { searchParams } = new URL(reqUrl);
    const pdfUrl = searchParams.get('pdfUrl');
    console.log(pdfUrl);

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