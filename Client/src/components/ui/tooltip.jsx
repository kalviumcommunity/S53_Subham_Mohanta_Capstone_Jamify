import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Tooltip({
    trigger,
    title = 'Create a playlist',
    description = 'Log in to create and share playlists.',
    primaryAction = { label: 'Log in', onClick: () => { } },
    secondaryAction = { label: 'Not now', onClick: () => { } },
    position = 'bottom'
}) {
    const [isOpen, setIsOpen] = useState(false)
    const triggerRef = useRef(null)
    const tooltipRef = useRef(null)
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 })

    useEffect(() => {
        function updatePosition() {
            if (!triggerRef.current || !tooltipRef.current) return

            const triggerRect = triggerRef.current.getBoundingClientRect()
            const tooltipRect = tooltipRef.current.getBoundingClientRect()

            let top = 0
            let left = 0

            switch (position) {
                case 'bottom':
                    top = triggerRect.bottom + 8
                    left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
                    break
                case 'top':
                    top = triggerRect.top - tooltipRect.height - 8
                    left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
                    break
                case 'left':
                    top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2
                    left = triggerRect.left - tooltipRect.width - 8
                    break
                case 'right':
                    top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2
                    left = triggerRect.right + 8
                    break
            }

            // Adjust for scroll
            top += window.scrollY
            left += window.scrollX

            setTooltipPosition({ top, left })
        }

        if (isOpen) {
            updatePosition()
            window.addEventListener('scroll', updatePosition)
            window.addEventListener('resize', updatePosition)
        }

        return () => {
            window.removeEventListener('scroll', updatePosition)
            window.removeEventListener('resize', updatePosition)
        }
    }, [isOpen, position])

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                tooltipRef.current &&
                !tooltipRef.current.contains(event.target) &&
                triggerRef.current &&
                !triggerRef.current.contains(event.target)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <>
            <div ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
                {trigger}
            </div>
            {isOpen &&
                createPortal(
                    <div
                        ref={tooltipRef}
                        style={{
                            top: tooltipPosition.top,
                            left: tooltipPosition.left,
                        }}
                        className="fixed z-50 min-w-[240px] transform bg-[#282828] rounded-lg shadow-lg"
                    >
                        <div className="p-4">
                            <h3 className="text-white text-base font-bold mb-1">{title}</h3>
                            {description && <p className="text-[#a7a7a7] text-sm mb-4">{description}</p>}
                            <div className="flex items-center justify-end gap-3">
                                {secondaryAction && (
                                    <button
                                        onClick={() => {
                                            secondaryAction.onClick()
                                            setIsOpen(false)
                                        }}
                                        className="text-white text-sm font-bold hover:scale-105"
                                    >
                                        {secondaryAction.label}
                                    </button>
                                )}
                                {primaryAction && (
                                    <button
                                        onClick={() => {
                                            primaryAction.onClick()
                                            setIsOpen(false)
                                        }}
                                        className="px-4 py-1 bg-white rounded-full text-black text-sm font-bold hover:scale-105 transition-transform"
                                    >
                                        {primaryAction.label}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    )
}
