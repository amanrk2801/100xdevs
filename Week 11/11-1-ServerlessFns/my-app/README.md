<!-- 
Initializing a worker
npm create cloudflare -- my-app
    Select no for Do you want to deploy your application

"wrangler": "^3.0.0"

npm run dev

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return Response.json({
			message: "hi"
		});
	},
};

 -->