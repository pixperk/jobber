import { Job } from '../decorators/job.decorator';
import { AbstractJob } from './abstract.job';

@Job({
  name: 'fibonacci',
  description:
    'Calculates the Fibonacci sequence up to a given number and stores it in the DB',
})
export class FibonacciJob extends AbstractJob {}
