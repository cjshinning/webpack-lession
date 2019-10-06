import _ from 'lodash';
import $ from 'jquery';

const dom = $('<div>');
dom.html(_.join(['jenny', 'chen'], '----'))
$('body').append(dom);