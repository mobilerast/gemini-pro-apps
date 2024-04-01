import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileEloborateComponent } from './file-eloborate.component';

describe('FileEloborateComponent', () => {
  let component: FileEloborateComponent;
  let fixture: ComponentFixture<FileEloborateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileEloborateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileEloborateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
