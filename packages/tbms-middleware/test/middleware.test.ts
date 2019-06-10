import Middleware from '../src/index';

test('basic', (done) => {
  const middle = new Middleware({})
  middle.use((ctx, next) => {
    ctx.test = 1;
    console.log('use1 >>>')
    next().then(() => {
      ctx.userDeffer1 = '1'
      console.log('use1 <<< promise')
    });
    console.log('use1 <<<')
  });

  middle.use((ctx, next) => {
    ctx.testTwo = 2;
    console.log('use2 >>>')
    next().then(() => {
      ctx.userDeffer2 = '2'
      console.log('use2 <<< promise')
    });
    console.log('use2 <<< ')
  })
  middle.dispatch({message:{message: 1, id: '12'}}).then((result: any) => {
    expect(result.userDeffer1).toBe('1');
    expect(result.userDeffer2).toBe('2');
    done();
  })
});


test('await async function ', (done) => {
  const middle = new Middleware({})
  async function asyncTest() {
    const result = await middle.dispatch({message:{message: 2, id: '12'}});
    expect(result.message.message).toBe(2);
    done();
  }

  asyncTest()
})
