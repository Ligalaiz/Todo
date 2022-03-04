install-dependencies:
	npm install

lint:
	npx eslint .

test:
	npm run test --maxWorkers=2

smoke-test:
	npm run test:smoke --maxWorkers=2

e2e-test:
	npm run cypress:run
