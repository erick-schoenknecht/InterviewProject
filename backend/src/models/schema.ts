const personSchema = {
    name: {
        dataType: 'string',
    },
    age: {
        dataType: 'number',
    },
    birthdate: {
        dataType: 'date',
    },
    residence: {
        country: {
            dataType: 'string',
        },
        city: {
            dataType: 'string',
        },
        test: {
            array: {
                dataType: 'date[]',
            }, 
        }, 
    },
    wishlist: {
        dataType: 'string[]',
    },
};

export = personSchema;