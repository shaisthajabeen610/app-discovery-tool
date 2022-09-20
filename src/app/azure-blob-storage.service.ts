import { Injectable } from '@angular/core';
import { BlobServiceClient,ContainerClient } from '@azure/storage-blob';

@Injectable({
  providedIn: 'root'
})
export class AzureBlobStorageService {
  accountName = 'azsk1';
  containerName = 'azsk';

  constructor() { }

  public async ListImages():Promise<String[]>{
    let result: String[] = [];
    let blobs = this.containerClient().listBlobsFlat();
    for await ( const blob of blobs){
      result.push(blob.name)
    }
    return result;
  }


  // public downloadImage(name: string, handler: (blob:Blob)=> void){
  //   const blobClient =  this.containerClient().getBlobClient(name);
  //   blobClient.download().then(resp=>
  //     resp.blobBody.then(blob => {
  //       handler(blob)
  //     }))
  // }

  private containerClient():ContainerClient{
    return new BlobServiceClient('https://${this.accountName}.blob.core.windows.net')
    .getContainerClient(this.containerName)
  }
}
