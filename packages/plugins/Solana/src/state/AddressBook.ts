import type { Subscription } from 'use-subscription'
import { getEnumAsArray } from '@masknet/kit'
import type { Plugin } from '@masknet/plugin-infra'
import { AddressBookState } from '@masknet/web3-state'
import { isSameAddress } from '@masknet/web3-shared-base'
import { ChainId, formatAddress, isValidAddress } from '@masknet/web3-shared-solana'

export class AddressBook extends AddressBookState<ChainId, Record<ChainId, string[]>> {
    constructor(
        context: Plugin.Shared.SharedContext,
        subscriptions: {
            chainId?: Subscription<ChainId>
        },
    ) {
        super(
            context,
            getEnumAsArray(ChainId).map((x) => x.value),
            subscriptions,
            {
                isValidAddress,
                isSameAddress,
                formatAddress,
            },
        )
    }
}
