import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SlidesService } from './slides.service';

describe('SlidesService', () => {
  let service: SlidesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    providers: [SlidesService]
    });
    service = TestBed.inject(SlidesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
