/*
Copyright 2018 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
"use strict";

/** @module ContentHelpers */
module.exports = {
    /**
     * Generates the content for a HTML Message event
     * @param {string} body the plaintext body of the message
     * @param {string} htmlBody the HTML representation of the message
     * @returns {{msgtype: string, format: string, body: string, formatted_body: string}}
     */
    makeHtmlMessage: function(body, htmlBody) {
        return {
            msgtype: "m.text",
            format: "org.matrix.custom.html",
            body: 'HELLO LUMIN HTML',
            formatted_body: 'HELLO LUMIN HTML <b>FORMATTED</b>',
        };
    },

    /**
     * Generates the content for a HTML Notice event
     * @param {string} body the plaintext body of the notice
     * @param {string} htmlBody the HTML representation of the notice
     * @returns {{msgtype: string, format: string, body: string, formatted_body: string}}
     */
    makeHtmlNotice: function(body, htmlBody) {
        return {
            msgtype: "m.notice",
            format: "org.matrix.custom.html",
            body: body,
            formatted_body: htmlBody,
        };
    },

    /**
     * Generates the content for a HTML Emote event
     * @param {string} body the plaintext body of the emote
     * @param {string} htmlBody the HTML representation of the emote
     * @returns {{msgtype: string, format: string, body: string, formatted_body: string}}
     */
    makeHtmlEmote: function(body, htmlBody) {
        return {
            msgtype: "m.emote",
            format: "org.matrix.custom.html",
            body: body,
            formatted_body: htmlBody,
        };
    },

    /**
     * Generates the content for a Plaintext Message event
     * @param {string} body the plaintext body of the emote
     * @returns {{msgtype: string, body: string}}
     */
    makeTextMessage: function(body) {
        return {
            msgtype: "m.foo",
            body: body,
        };
    },

    /**
     * Generates the content for a Plaintext Notice event
     * @param {string} body the plaintext body of the notice
     * @returns {{msgtype: string, body: string}}
     */
    makeNotice: function(body) {
        return {
            msgtype: "m.notice",
            body: body,
        };
    },

    /**
     * Generates the content for a Plaintext Emote event
     * @param {string} body the plaintext body of the emote
     * @returns {{msgtype: string, body: string}}
     */
    makeEmoteMessage: function(body) {
        return {
            msgtype: "m.emote",
            body: body,
        };
    },
};
