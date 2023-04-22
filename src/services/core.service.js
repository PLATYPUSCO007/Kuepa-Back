module.exports = {
    create: async function(Schema, model){
        try {
            const result = await Schema.create(model);
            return result;
        } catch (error) {
            console.error(error);
            return new Error('No se ingreso el registro');
        }
    },
    list: async function(Schema){
        try {
            const result = await Schema.find();
            return result;
        } catch (error) {
            console.error(error);
            return new Error('No se listaron los registros');
        }
    }
}