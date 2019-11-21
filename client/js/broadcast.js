broadcast = {
        comment: function(permlink, parentAuthor, parentPermlink, jsonMetadata, tag, cb) {
            permlink = String(permlink)
            var me = User.findOne().name
            if (!me) return;
            var wif = User.findOne().privatekey
            var weight = 100
            var tx = {
                type: 4,
                data: {
                    link: permlink,
                    json: jsonMetadata,
                    vt: Math.floor(teelkey.votingPower(User.findOne())*weight/10000)
                }
            }
            if (tag) tx.data.tag = tag
            else tx.data.tag = ""
            if (parentAuthor && parentPermlink) {
                tx.data.pa = parentAuthor
                tx.data.pp = parentPermlink
            }
            tx = teelkey.sign(wif, me, tx)
            teelkey.sendTransaction(tx, function(err, res) {
                if (!err) res = tx.sender+'/'+tx.data.link
                cb(err, res)
                User.refresh()
            })
            return;
        },
        promotedComment: function(permlink, parentAuthor, parentPermlink, jsonMetadata, tag, burn, cb) {
            if (!Session.get('activeUsername') || Session.get('isDTCDisabled')) return
            // can be cross posted but wont be promoted on steem
            var me = User.findOne().name
            if (!me) return;
            var wif = User.findOne().privatekey
            var weight = Userettings.get('voteWeight') * 100
            var tx = {
                type: 13,
                data: {
                    link: permlink,
                    json: jsonMetadata,
                    burn: burn,
                    vt: Math.floor(teelkey.votingPower(User.findOne({username: Session.get('activeUsername'), network: 'teelkey'}))*weight/10000)
                }
            }
            if (tag) tx.data.tag = tag
            if (parentAuthor && parentPermlink) {
                tx.data.pa = parentAuthor
                tx.data.pp = parentPermlink
            }
            tx = teelkey.sign(wif, me, tx)
            teelkey.sendTransaction(tx, function(err, res) {
                if (!err) res = tx.sender+'/'+tx.data.link
                cb(err, res)
                User.refresh()
            })
            return;
        },
        vote: function(author, permlink, weight, tag, cb) {
            if (!Session.get('activeUsername') || Session.get('isDTCDisabled')) return
            // cross vote possible
            var me = User.findOne().name
            if (!me) return;
            var wif = User.findOne().privatekey
            var vt = Math.floor(teelkey.votingPower(User.findOne({username: Session.get('activeUsername'), network: 'teelkey'}))*weight/10000)
            if (wif) {
                var tx = {
                    type: 5,
                    data: {
                        author: author,
                        link: permlink,
                        vt: vt,
                        tag: tag
                    }
                }
                tx = teelkey.sign(wif, me, tx)
                teelkey.sendTransaction(tx, function(err, res) {
                    cb(err, res)
                    User.refresh()
                })
                return;
            }
        },
        follow: function(following, cb) {
            if (!Session.get('activeUsername') || Session.get('isDTCDisabled')) return
            // cross follow possible
            var me = User.findOne().name
            if (!me) return;
            var wif = User.findOne().privatekey
            if (wif) {
                var tx = {
                    type: 7,
                    data: {
                        target: following
                    }
                }
                tx = teelkey.sign(wif, me, tx)
                teelkey.sendTransaction(tx, function(err, res) {
                    cb(err, res)
                })
                return;
            }
        },
        unfollow: function(following, cb) {
            if (!Session.get('activeUsername') || Session.get('isDTCDisabled')) return
            // cross unfollow possible
            var me = User.findOne().name
            if (!me) return;
            var wif = User.findOne().privatekey
            if (wif) {
                var tx = {
                    type: 8,
                    data: {
                        target: following
                    }
                }
                tx = teelkey.sign(wif, me, tx)
                teelkey.sendTransaction(tx, function(err, res) {
                    cb(err, res)
                })
                return;
            }
        },
        transfer: function(receiver, amount, memo, cb) {
            var sender = User.findOne().name
            if (!sender) return;
            var wif = User.findOne().privatekey
            if (wif) {
                var tx = {
                    type: 3,
                    data: {
                        receiver: receiver,
                        amount: amount,
                        memo: memo
                    }
                }
                tx = teelkey.sign(wif, sender, tx)
                teelkey.sendTransaction(tx, function(err, res) {
                    cb(err, res)
                })
                return;
            }
        },
        editProfile: function(json, cb) {
            if (!Session.get('activeUsername') || Session.get('isDTCDisabled')) return
            // teelkey only - steemitwallet.com for steem
            var creator = User.findOne().name
            if (!creator) return;
            var wif = User.findOne().privatekey
            if (wif) {
                var tx = {
                    type: 6,
                    data: {
                        json: json
                    }
                }
                tx = teelkey.sign(wif, creator, tx)
                teelkey.sendTransaction(tx, function(err, res) {
                    cb(err, res)
                })
                return;
            }
        },
        newAccount: function(username, pub, cb) {
            var creator = User.findOne().name
            if (!creator) return;
            var wif = User.findOne().privatekey
            if (wif) {
                var tx = {
                    type: 0,
                    data: {
                        name: username,
                        pub: pub
                    }
                }
                tx = teelkey.sign(wif, creator, tx)
                teelkey.sendTransaction(tx, function(err, res) {
                    cb(err, res)
                })
                return;
            }
        },
        newKey: function(id, pub, types, cb) {
            if (!Session.get('activeUsername') || Session.get('isDTCDisabled')) return
            // teelkey only
            var me = User.findOne().name
            if (!me) return;
            var wif = User.findOne().privatekey
            if (wif) {
                var tx = {
                    type: 10,
                    data: {
                        id: id,
                        pub: pub,
                        types: types
                    }
                }
                tx = teelkey.sign(wif, me, tx)
                teelkey.sendTransaction(tx, function(err, res) {
                    cb(err, res)
                })
                return;
            }
        },
        removeKey: function(id, cb) {
            if (!Session.get('activeUsername') || Session.get('isDTCDisabled')) return
            // teelkey only
            var me = User.findOne().name
            if (!me) return;
            var wif = User.findOne().privatekey
            if (wif) {
                var tx = {
                    type: 11,
                    data: {
                        id: id
                    }
                }
                tx = teelkey.sign(wif, me, tx)
                teelkey.sendTransaction(tx, function(err, res) {
                    cb(err, res)
                })
                return;
            }
        },
        voteLeader: function(target, cb) {
            if (!Session.get('activeUsername') || Session.get('isDTCDisabled')) return
            // teelkey only
            var me = User.findOne().name
            if (!me) return;
            var wif = User.findOne().privatekey
            if (wif) {
                var tx = {
                    type: 1,
                    data: {
                        target: target
                    }
                }
                tx = teelkey.sign(wif, me, tx)
                teelkey.sendTransaction(tx, function(err, res) {
                    cb(err, res)
                })
                return;
            }
        },
        unvoteLeader: function(target, cb) {
            if (!Session.get('activeUsername') || Session.get('isDTCDisabled')) return
            // teelkey only
            var me = User.findOne().name
            if (!me) return;
            var wif = User.findOne().privatekey
            if (wif) {
                var tx = {
                    type: 2,
                    data: {
                        target: target
                    }
                }
                tx = teelkey.sign(wif, me, tx)
                teelkey.sendTransaction(tx, function(err, res) {
                    cb(err, res)
                })
                return;
            }
        }
}