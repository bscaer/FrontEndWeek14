const UNICORNS_ENDPOINT = 'https://crudcrud.com/api/62a39a9391c34154ad2e102b673ea9f7/unicorns';

// The UnicornService uses an API to fetch, create, update
// and delete unicorns on crudcrud.
class UnicornService {

    // The getAll function fetches all the unicorns
    getAll = async() => {
        try {
            const resp = await fetch(UNICORNS_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.error(`Problem fetching unicorns: ${e}`);
        }
    }

    // The update function updates a unicorn.
    update = async(unicorn) => {
        try {
            let updatedWithoutId = {
                firstName: unicorn.firstName,
                lastName: unicorn.lastName,
                feature: unicorn.feature,
                collection: unicorn.collection
            }
            const resp = await fetch(`${UNICORNS_ENDPOINT}/${unicorn._id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedWithoutId)
            });
            return resp;
        } catch(e) {
            console.error(`Problem updating unicorn: ${e}`);
        }
    }

    // The create function creates a unicorn.
    create = async(unicorn) => {
        try {
            const resp = await fetch(`${UNICORNS_ENDPOINT}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(unicorn)
            });
            return resp;
        } catch(e) {
            console.error(`Problem creating unicorn: ${e}`);
        }
    }

    // The delete function deletes a unicorn.
    delete = async(id) => {
        try {
            const resp = await fetch(`${UNICORNS_ENDPOINT}/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            return resp;
        } catch(e) {
            console.error(`Problem deleting unicorn:${e}`);
        }
    }
}

// Instantiate the UnicornService.
export const unicornService = new UnicornService();