import assert from 'assert';
import { Host, Peer } from '../src/sync-sim.js';

describe('sync simulator', () => {
  it('reduces offset over time', () => {
    const host = new Host();
    const peer = new Peer('T');
    const before = Math.abs(peer.offset);
    for (let i=0;i<5;i++) peer.adjust(host.position());
    const after = Math.abs(peer.offset);
    assert(after < before, 'offset should reduce with adjustments');
  });
});
