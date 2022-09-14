import { app, InvocationContext } from "@azure/functions";

export async function storageBlobTrigger2(context: InvocationContext, blob: Buffer): Promise<void> {
    context.log(`Storage blob function processed blob "${context.triggerMetadata.name}" with size "${blob.length}"`);
}

if (process.env.storage_APPSETTING) {
    app.storageBlob('storageBlobTrigger2', {
        path: 'helloworldcontainer2/{name}',
        connection: 'storage_APPSETTING',
        handler: storageBlobTrigger2
    });
} else {
    console.warn('Skipping registration of "storageBlobTrigger2" because "storage_APPSETTING" is not defined');
}