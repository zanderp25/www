import { exec } from 'child_process';

export default (req, res) => {
    exec('git pull', (err, stdout, stderr) => {
        if (err) {
            res.status(500).send(err).send('\n' + stderr);
            return;
        }
        res.status(200).send(stdout);
    });
};