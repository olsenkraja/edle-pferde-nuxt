export default defineEventHandler(async (event) => {
    const {collection, slug} = event.context.params
    const config = useRuntimeConfig(event)

    return await $fetch(config.public.cmsUrl + '/api/' + collection + '/' + slug + '.json');
});
