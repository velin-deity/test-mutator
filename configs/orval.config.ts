import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    output: {
      mode: 'tags-split',
      target: '../src/testEndpoints.ts',
      client: 'react-query',
      override: {
        mutator: {
          path: '../src/testMutator.ts',
          name: 'useTestMutator'
        },
        query: {
          useQuery: true
        }
      }
    },
    input: {
      target: {
        openapi: '3.0.0',
        "info": {
          title: "Test service",
          "version": "0.0.1",
        },
        paths: {
          '/api/test': {
            get: {
              operationId: 'test',
              summary: 'Testing orval',
              description: 'This is a test endpoint',
              responses: {
                '200': {
                  description: 'Success',
                  content: {
                    'text/plain': {
                      schema: {
                        type: 'string',
                        title: 'TestResponse'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});
