export default defineEventHandler(async (event) => {
    const { collection } = event.context.params

    return await $fetch(process.env.VITE_API_APTH + collection + '.json');
});
