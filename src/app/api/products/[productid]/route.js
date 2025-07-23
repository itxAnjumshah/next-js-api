import { connectionstr } from "@/app/library/db ";
import { Product } from "@/app/library/schema/product ";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
// put  api
export async function PUT(request, content) {
    const productid = content.params.productid;
    const filter = { _id: productid }
    const payload = await request.json();
    console.log(payload)
    await mongoose.connect(connectionstr)
    const result = await Product.findOneAndUpdate(filter, payload)
    return NextResponse.json({ result, success: true })

} 
// put  api by  id  http:/localhost:3000/api/product/abcfgf
// ya  single  api ka  data  ko lana  kalea  use  hota  ha
export async function GET(request, content) {
    const productid = content.params.productid;
   const record={_id:productid}
    await mongoose.connect(connectionstr)
    const result = await Product.findById(record)
    return NextResponse.json({ result, success: true })

}

// delte api
export async function DELETE(request,content) {
    const  productid=content.params.productid;
    const record={_id:productid}
    await mongoose.connect(connectionstr);
    const result=await Product.deleteOne(record);
    return NextResponse.json({result,success:true})
    
}