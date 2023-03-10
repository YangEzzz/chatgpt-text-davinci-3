const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
	dev: { baseApi: 'http://localhost:1229' },
	prod: { baseApi: 'http://175.178.115.221:1229' },
	production: { baseApi: 'http://175.178.115.221:1229' },
}
export default {
	env,
	...EnvConfig[env],
}
