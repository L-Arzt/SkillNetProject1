"use strict";(()=>{var e={};e.id=721,e.ids=[721],e.modules={53524:e=>{e.exports=require("@prisma/client")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63283:(e,t,o)=>{o.r(t),o.d(t,{headerHooks:()=>d,originalPathname:()=>h,patchFetch:()=>x,requestAsyncStorage:()=>l,routeModule:()=>u,serverHooks:()=>m,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>g});var r={};o.r(r),o.d(r,{POST:()=>p});var s=o(95419),a=o(69108),i=o(99678),n=o(53524);async function p(e){let t=await e.json();console.log(t);let o=new n.PrismaClient,r=await o.course.findMany({where:{price:{lte:t.price},peopleMax:{gte:t.guests}}});return Response.json(r)}let u=new s.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/rooms/getRooms/route",pathname:"/api/rooms/getRooms",filename:"route",bundlePath:"app/api/rooms/getRooms/route"},resolvedPagePath:"/Users/der/Documents/skillnetproject/SkillNetProjectt/app/api/rooms/getRooms/route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:l,staticGenerationAsyncStorage:c,serverHooks:m,headerHooks:d,staticGenerationBailout:g}=u,h="/api/rooms/getRooms/route";function x(){return(0,i.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:c})}},95419:(e,t,o)=>{e.exports=o(30517)}};var t=require("../../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),r=t.X(0,[638],()=>o(63283));module.exports=r})();