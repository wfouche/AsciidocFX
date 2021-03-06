/* Generated by Opal 0.8.0 */
(function (Opal) {
    Opal.dynamic_require_severity = "ignore";
    var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $gvars = Opal.gvars;

    return (function ($base, $super) {
        function $ReplacementReplacer() {
        };
        var self = $ReplacementReplacer = $klass($base, $super, 'ReplacementReplacer', $ReplacementReplacer);

        var def = self.$$proto, $scope = self.$$scope;

        Opal.cdecl($scope, 'CC_ALPHA', "a-zA-Z");

        Opal.cdecl($scope, 'CG_ALPHA', "[a-zA-Z]");

        Opal.cdecl($scope, 'CC_ALNUM', "a-zA-Z0-9");

        Opal.cdecl($scope, 'CG_ALNUM', "[a-zA-Z0-9]");

        Opal.cdecl($scope, 'CG_BLANK', "[ \\t]");

        Opal.cdecl($scope, 'CC_EOL', "(?=\\n|$)");

        Opal.cdecl($scope, 'CG_GRAPH', "[\\x21-\\x7E]");

        Opal.cdecl($scope, 'CC_ALL', "[\\s\\S]");

        Opal.cdecl($scope, 'CC_WORD', "a-zA-Z0-9_");

        Opal.cdecl($scope, 'CG_WORD', "[a-zA-Z0-9_]");

        Opal.cdecl($scope, 'REPLACEMENTS', [[/\\?\(C\)/, '©', "none"],
            [/\\?\(R\)/, '®', "none"],
            [/\\?\(TM\)/, '™', "none"],
            [/(^|\n| |\\)--( |\n|$)/, ' — ', "none"],
            [(new RegExp("(" + $scope.CG_WORD + ")\\\\?--(?=" + $scope.CG_WORD + ")")), '—​', "leading"],
            [/\\?\.\.\./, '…​', "leading"],
            [/\\?`'/, '’', "none"],
            [(new RegExp("(" + $scope.CG_ALNUM + ")\\\\?'(?=" + $scope.CG_ALPHA + ")")), '’', "leading"],
            [/\\?-&gt;/, '→', "none"],
            [/\\?->/, '→', "none"],
            [/\\?=&gt;/, '⇒', "none"],
            [/\\?=>/, '⇒', "none"],
            [/\\?&lt;-/, '←', "none"],
            [/\\?<-/, '←', "none"],
            [/\\?&lt;=/, '⇐', "none"],
            [/\\?<=/, '⇐', "none"],
            [/\\?(&)amp;((?:[a-zA-Z]+|#\d{2,5}|#x[a-fA-F0-9]{2,4});)/, "", "bounding"]]);

        Opal.defs(self, '$do_replacement', function (m, replacement, restore) {
            var $a, self = this, matched = nil, $case = nil;

            if ((($a = ((matched = m['$[]'](0)))['$include?']("\\")) !== nil && (!$a.$$is_boolean || $a == true))) {
                return matched.$tr("\\", "")
            } else {
                return (function () {
                    $case = restore;
                    if ("none"['$===']($case)) {
                        return replacement
                    } else if ("leading"['$===']($case)) {
                        return "" + (m['$[]'](1)) + (replacement)
                    } else if ("bounding"['$===']($case)) {
                        return "" + (m['$[]'](1)) + (replacement) + (m['$[]'](2))
                    } else {
                        return nil
                    }
                })()
            }
            ;
        });

        return (Opal.defs(self, '$sub_replacements', function (text) {
                var $a, $b, TMP_1, self = this, result = nil;

                result = text;
                ($a = ($b = $scope.get('REPLACEMENTS')).$each, $a.$$p = (TMP_1 = function (pattern, replacement, restore) {
                    var self = TMP_1.$$s || this, $a, $b, TMP_2;
                    if (pattern == null) pattern = nil;
                    if (replacement == null) replacement = nil;
                    if (restore == null) restore = nil;
                    return result = ($a = ($b = result).$gsub, $a.$$p = (TMP_2 = function () {
                        var self = TMP_2.$$s || this;
                        if ($gvars["~"] == null) $gvars["~"] = nil;

                        return self.$do_replacement($gvars["~"], replacement, restore)
                    }, TMP_2.$$s = self, TMP_2), $a).call($b, pattern)
                }, TMP_1.$$s = self, TMP_1), $a).call($b);
                return result;
            }), nil) && 'sub_replacements';
    })(self, null)
})(Opal);

function apply_replacements(text) {
    return Opal.ReplacementReplacer.$sub_replacements(text);
}