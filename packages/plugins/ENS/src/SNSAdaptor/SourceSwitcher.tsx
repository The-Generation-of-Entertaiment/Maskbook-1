import { useCallback } from 'react'
import type { SourceType } from '@masknet/web3-shared-base'
import useStyles from './useStyles'
import { FootnoteMenuOption, SourceSwitcher as SourceSwitcherShared } from '@masknet/shared'
import { CollectibleState } from './hooks/useCollectibleState'
import { SUPPORTED_SOURCE_TYPES } from '../constants'

export function SourceSwitcher() {
    const { classes } = useStyles()
    const { setProvider, provider } = CollectibleState.useContainer()

    const onDataProviderChange = useCallback((option: FootnoteMenuOption) => {
        setProvider(option.value as SourceType)
    }, [])

    return (
        <div className={classes.sourceSwitcher}>
            <SourceSwitcherShared
                classes={{
                    sourceNote: classes.sourceNote,
                }}
                sourceType={provider}
                sourceTypes={SUPPORTED_SOURCE_TYPES}
                onSourceTypeChange={onDataProviderChange}
            />
        </div>
    )
}