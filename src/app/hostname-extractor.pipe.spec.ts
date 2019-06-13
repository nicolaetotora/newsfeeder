import { HostnameExtractorPipe } from './hostname-extractor.pipe';

describe('HostnameExtractorPipe', () => {
  it('create an instance', () => {
    const pipe = new HostnameExtractorPipe();
    expect(pipe).toBeTruthy();
  });
});
