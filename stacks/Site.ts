import { use, SvelteKitSite, StackContext } from 'sst/constructs';
import { DNS } from './DNS';

export default function Site({ stack }: StackContext) {
	const dns = use(DNS);

	const site = new SvelteKitSite(stack, 'Site', {
		path: 'packages/web/',
		customDomain: {
			domainName: dns.domain,
			domainAlias: 'www' + dns.domain,
			hostedZone: dns.zone,
		},
	});

	stack.addOutputs({
		URL: site.url,
	});
}
