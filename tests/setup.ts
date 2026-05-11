import '@testing-library/jest-dom'
import { vi } from 'vitest'

// jsdom non implementa showModal/close nativamente
if (typeof HTMLDialogElement !== 'undefined') {
	HTMLDialogElement.prototype.showModal = vi.fn(function (
		this: HTMLDialogElement,
	) {
		this.setAttribute('open', '')
	})
	HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) {
		this.removeAttribute('open')
	})
}
