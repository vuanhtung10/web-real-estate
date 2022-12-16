import { i18n } from '~/plugins/i18n'
let $
if (process.client) {
  require('bootstrap-notify')
  $ = require('jquery')
}

export const notify = (title, message, type = 'danger', icon = null) => {
  let iconClass = ''

  if (icon == null) {
    switch (type) {
      case 'danger':
        iconClass = 'icon la la-exclamation-circle'
        break
      case 'success':
        iconClass = 'icon la la-check'
        break
      case 'info':
        iconClass = 'icon la la-info-circle'
        break
      case 'warning':
        iconClass = 'icon la la-exclamation-triangle'
        break
      default:
        break
    }
  } else {
    iconClass = 'icon ' + icon
  }

  $.notify(
    {
      title,
      message,
      icon: iconClass,
    },
    {
      type,
      z_index: 99999,
      timer: 2500,
      animate: {
        enter: 'animated fadeInDown',
        exit: 'animated fadeOutDown',
      },
      template:
        '<div data-notify="container" class="alert alert-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss"></button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>',
    }
  )
}

export const notifyTryAgain = () =>
  notify(i18n.t('alert.notice'), i18n.t('alert.try_again'), 'danger')
export const notifyDanger = (objectName) =>
  notify(i18n.t('alert.notice'), [objectName], 'danger')

export const notifyAddSuccess = (objectName) =>
  notify(
    i18n.t('alert.notice'),
    i18n.t('alert.add_success', [objectName]),
    'success'
  )
export const notifyUpdateSuccess = (objectName) =>
  notify(
    i18n.t('alert.notice'),
    i18n.t('alert.update_success', [objectName]),
    'success'
  )
export const notifyDeleteSuccess = (objectName) =>
  notify(
    i18n.t('alert.notice'),
    i18n.t('alert.delete_success', [objectName]),
    'success'
  )

export const notifyNoPermission = () =>
  notify(i18n.t('alert.notice'), i18n.t('alert.no_permission'), 'danger')

export const notifyExportFail = (objectName) =>
  notify(i18n.t('alert.notice'), 'Không có bản ghi để xuất file', 'danger')

export const notifyImportSuccess = (objectName) =>
  notify(
    i18n.t('alert.notice'),
    i18n.t('Import thành công', [objectName]),
    'success'
  )
