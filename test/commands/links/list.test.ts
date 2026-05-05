import { runCommand } from '@oclif/test'
import { expect } from 'chai'


describe('links:list', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['links:noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(5000)
})
