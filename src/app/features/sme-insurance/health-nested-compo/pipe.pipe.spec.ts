import { SafeUrlPipe } from './pipe.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('SafeUrlPipe', () => {
  let pipe: SafeUrlPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SafeUrlPipe]
    });

    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new SafeUrlPipe(sanitizer);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform a URL into a SafeResourceUrl', () => {
    const url = 'https://example.com/video.mp4';
    const safeUrl = pipe.transform(url);

    expect(safeUrl).toBeTruthy(); // You can’t check exact value, it’s a SafeValue object
    expect(safeUrl.toString()).toContain('https://example.com/video.mp4');
  });
});
