/*
 * Copyright 2011 eBay Software Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var Console = require('ql.io-console');

var c = new Console({
        'tables': __dirname + '/tables',
        'routes': __dirname + '/routes',
        'config': __dirname + '/config/dev.json',
        'enable console': true,
        'log levels': require('winston').config.syslog.levels});

c.app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on ' + process.env.PORT || 3000);
})
