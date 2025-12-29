// Simple sync simulator: host emits authoritative timestamps, peers adjust
class Host {
  constructor() { this.start = Date.now(); }
  position() { return Date.now() - this.start; }
}

class Peer {
  constructor(name) { this.name = name; this.offset = Math.random()*200 - 100; }
  adjust(hostPos) {
    const measured = hostPos + this.offset;
    const correction = (hostPos - measured) * 0.5; // simple slew
    this.offset += correction;
    return this.offset;
  }
}

if (require.main === module) {
  const host = new Host();
  const peers = [new Peer('A'), new Peer('B'), new Peer('C')];
  setInterval(() => {
    const hostPos = host.position();
    peers.forEach(p => {
      const offset = p.adjust(hostPos);
      console.log(`${p.name} offset: ${offset.toFixed(2)}ms`);
    });
    console.log('---');
  }, 1000);
}

module.exports = { Host, Peer };
