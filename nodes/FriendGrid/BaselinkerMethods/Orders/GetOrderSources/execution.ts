import {makeBaselinkerRequest} from "../../request.maker";

export async function getOrderSourcesExecution(args: {
	apiKey: string;
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getOrderSources',
	});
}
