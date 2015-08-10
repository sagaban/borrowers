//
// Import the default export from active-model-adapter
//
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  namespace: 'api/v4',
  coalesceFindRequests: true
});
