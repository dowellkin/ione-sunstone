/* -------------------------------------------------------------------------- */
/* Copyright 2002-2017, OpenNebula Project, OpenNebula Systems                */
/*                                                                            */
/* Licensed under the Apache License, Version 2.0 (the "License"); you may    */
/* not use this file except in compliance with the License. You may obtain    */
/* a copy of the License at                                                   */
/*                                                                            */
/* http://www.apache.org/licenses/LICENSE-2.0                                 */
/*                                                                            */
/* Unless required by applicable law or agreed to in writing, software        */
/* distributed under the License is distributed on an "AS IS" BASIS,          */
/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   */
/* See the License for the specific language governing permissions and        */
/* limitations under the License.                                             */
/* -------------------------------------------------------------------------- */

define(function (require) {
  var OpenNebulaAction = require('./action');

  var RESOURCE = "VNET";

  var Network = {
    "resource": RESOURCE,
    "create": function (params) {
      OpenNebulaAction.create(params, RESOURCE);
    },
    "del": function (params) {
      OpenNebulaAction.del(params, RESOURCE);
    },
    "list": function (params) {
      OpenNebulaAction.list(params, RESOURCE);
    },
    "list_in_zone": function (params) {
      OpenNebulaAction.list_in_zone(params, RESOURCE);
    },
    "show": function (params) {
      OpenNebulaAction.show(params, RESOURCE);
    },
    "chown": function (params) {
      OpenNebulaAction.chown(params, RESOURCE);
    },
    "chgrp": function (params) {
      OpenNebulaAction.chgrp(params, RESOURCE);
    },
    "chmod": function (params) {
      var action_obj = params.data.extra_param;
      OpenNebulaAction.simple_action(params, RESOURCE, "chmod", action_obj);
    },
    "publish": function (params) {
      OpenNebulaAction.simple_action(params, RESOURCE, "publish");
    },
    "unpublish": function (params) {
      OpenNebulaAction.simple_action(params, RESOURCE, "unpublish");
    },
    "hold": function (params) {
      var action_obj = params.data.extra_param;
      OpenNebulaAction.simple_action(params, RESOURCE, "hold", action_obj);
    },
    "release": function (params) {
      var action_obj = params.data.extra_param;
      OpenNebulaAction.simple_action(params, RESOURCE, "release", action_obj);
    },
    "add_ar": function (params) {
      var action_obj = { "ar_template": params.data.extra_param };
      OpenNebulaAction.simple_action(params, RESOURCE, "add_ar", action_obj);
    },
    "rm_ar": function (params) {
      var action_obj = params.data.extra_param;
      OpenNebulaAction.simple_action(params, RESOURCE, "rm_ar", action_obj);
    },
    "update_ar": function (params) {
      var action_obj = { "ar_template": params.data.extra_param };
      OpenNebulaAction.simple_action(params, RESOURCE, "update_ar", action_obj);
    },
    "reserve": function (params) {
      var action_obj = params.data.extra_param;
      OpenNebulaAction.simple_action(params, RESOURCE, "reserve", action_obj);
    },
    "update": function (params) {
      var action_obj = { "template_raw": params.data.extra_param };
      OpenNebulaAction.simple_action(params, RESOURCE, "update", action_obj);
    },
    "append": function (params) {
      var action_obj = { "template_raw": params.data.extra_param, append: true };
      OpenNebulaAction.simple_action(params, RESOURCE, "update", action_obj);
    },
    "rename": function (params) {
      var action_obj = params.data.extra_param;
      OpenNebulaAction.simple_action(params, RESOURCE, "rename", action_obj);
    },
    "getName": function (id) {
      return OpenNebulaAction.getName(id, RESOURCE);
    },
    "reserve_public_ip": function ({ n: amount, u: user_id }, callback) {
      $.ajax({
        url: '/ione/reserve_public_ip',
        type: 'POST',
        data: JSON.stringify({ "params": [{ "n": amount * 1, "u": user_id * 1 }] }),
        success: function (req, res) {
          console.log('SUCCESS -> ', { req, res })
          return callback ? callback(req, res) : null;
        },
        error: function (req, res) {
          console.log('ERROR ->', { req, res });
        }
      });
    },
    "release_public_ip": function ({ vn, ar }, callback) {
      $.ajax({
        url: '/ione/release_public_ip',
        type: 'POST',
        data: JSON.stringify({ "params": [{ "vn": vn * 1, "ar": ar * 1 }] }),
        success: function (req, res) {
          console.log('SUCCESS -> ', { req, res })
          return callback ? callback(req, res) : null;
        },
        error: function (req, res) {
          console.log('ERROR ->', { req, res });
        }
      });
    }
  }

  return Network;
})
