/**
 * NIRO
 * Please add description
 *
 * OpenAPI spec version: 0.1.0_inProgress
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { OrangeApiStatusValue } from './orangeApiStatusValue';

/**
 * A component your service requires (other web service, database, etc) to be fully functional.  See [Orange Recommendation](https://recommendations.innov.intraorange/designing-orange-api/#status-path)
 */
export interface OrangeApiComponent { 
    status: OrangeApiStatusValue;
    /**
     * Component internal name.
     */
    name: string;
    /**
     * major.minor.patch see [semver.org](https://semver.org/) or G00R00C00
     */
    version: string;
}