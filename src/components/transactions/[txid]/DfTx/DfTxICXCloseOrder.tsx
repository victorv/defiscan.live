import { DfTx, ICXCloseOrder } from '@defichain/jellyfish-transaction'
import { DfTxHeader } from '@components/transactions/[txid]/DfTx/DfTxHeader'
import { AdaptiveList } from '@components/commons/AdaptiveList'

interface DfTxICXCloseOrderProps {
  dftx: DfTx<ICXCloseOrder>
}

export function DfTxICXCloseOrder (props: DfTxICXCloseOrderProps): JSX.Element {
  return (
    <div>
      <DfTxHeader name='ICX Close Order' />
      <div className='mt-5 flex flex-col space-y-6 items-start lg:flex-row lg:space-x-8 lg:space-y-0'>
        <AdaptiveList>
          <AdaptiveList.Row name='Order Tx'>
            <span data-testid='DfTxICXCloseOrder.OrderTx'>{props.dftx.data.orderTx}</span>
          </AdaptiveList.Row>
        </AdaptiveList>
      </div>
    </div>
  )
}
