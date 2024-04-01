import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-eloborate',
  templateUrl: './file-eloborate.component.html',
  styleUrls: ['./file-eloborate.component.css']
})
export class FileEloborateComponent implements OnInit {
  selectedFile: File | null = null;
  elaboratedAudioUrl: string | null = null;
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];
    } else {
      this.selectedFile = null;
    }
  }

  onUpload() {
    if (!this.selectedFile) {
      this.errorMessage = 'Please select a file to upload.';
      return;
    }

    const formData = new FormData();
    formData.append('audioFile', this.selectedFile);

    this.http.post('/api/audio-elaboration/upload', formData)
      .subscribe(
        (response: any) => {
          this.elaboratedAudioUrl = response.elaboratedAudioUrl;
          this.errorMessage = null;
        },
        (error) => {
          this.elaboratedAudioUrl = null;
          this.errorMessage = 'An error occurred during upload.';
        }
      );
  }
}