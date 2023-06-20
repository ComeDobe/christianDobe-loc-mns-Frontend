export class DefectSignal {
  materielId: number;
  imageUrl: string;
  panneDescription: string;


  constructor(materielId: number, imageUrl: string, panneDescription: string) {
    this.materielId = materielId;
    this.imageUrl = imageUrl;
    this.panneDescription = panneDescription;
  }
}
