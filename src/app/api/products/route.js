import { connectionstr } from "@/app/library/db ";
import { Product } from "@/app/library/schema/product ";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {

    let  data=[]
try{
 await  mongoose.connect(connectionstr)
     data=await Product.find();
}catch(error){
 data={success:false}
}
    return NextResponse.json({ result:data})   
}


export async function POST(request) {
  try {
    const payload = await request.json();

    await mongoose.connect(connectionstr);

    const product = new Product(payload); // ✅ Capital P
    const result = await product.save();

    return NextResponse.json({ result, success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}