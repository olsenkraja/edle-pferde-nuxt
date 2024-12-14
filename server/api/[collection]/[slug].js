export default defineEventHandler(async (event) => {
    const {collection, slug} = event.context.params

    console.log(collection)
    console.log(slug)

    return await $fetch(process.env.VITE_API_APTH + collection + '/' + slug + '.json');
});
