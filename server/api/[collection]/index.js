export default defineEventHandler(async (event) => {
    const { collection } = event.context.params
    const config = useRuntimeConfig(event)

    return await $fetch(config.public.cmsUrl + '/api/' + collection + '.json');
});
