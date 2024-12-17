export default defineEventHandler(async (event) => {
    const { collection } = event.context.params

    return await $fetch(process.env.VITE_API_PATH + collection + '.json');
});
